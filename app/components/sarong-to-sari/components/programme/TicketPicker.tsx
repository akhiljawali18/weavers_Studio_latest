"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ADD_TO_CART, GET_CART, UPDATE_CART } from "@/app/api/home/route";
import { createGuestUser } from "@/app/common/hooks/createGuestUser";
import { useGetBuyingType } from "@/app/common/hooks/useGetBuyingType";
import { setBagCount } from "@/Reducers/NavbarReducer";
import { setToken, setUserDetails } from "@/Reducers/UserReducer";

const rupees = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export type PriceOption = {
  amount: number;
  note: string;
  productId?: number | string;
  skuId?: number | string;
  stock_qty?: number | string;
};

type TicketPickerProps = {
  ticketDetails: any;
  prices?: PriceOption[];
};

const stepButton =
  "relative flex h-[24px] items-center justify-center rounded-sm text-s2s-ink " +
  "transition-colors hover:text-s2s-maroon disabled:cursor-default disabled:hover:text-s2s-ink " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon";

const TicketPicker = ({ ticketDetails, prices }: TicketPickerProps) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const stateUser = useSelector(
    (reduxState: any) => reduxState?.User?.userData,
  );
  const { mutateAsync: getBuyingType } = useGetBuyingType();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [outofStock, setOutofStock] = useState(false);
  const [availableQty, setAvailableQty] = useState<number | null>(null);
  const name = useId();

  const needsChoice = Boolean(prices && prices.length > 1);
  const selectedOption =
    prices && prices.length > 0 ? prices[selected ?? 0] : undefined;
  const selectedSku =
    ticketDetails?.skudetails?.[selected ?? 0] ??
    ticketDetails?.skudetails?.[0];
  const resolvedProductId =
    selectedOption?.productId ??
    selectedSku?.productid?.id ??
    ticketDetails?.skudetails?.[0]?.productid?.id;
  const resolvedSkuId =
    selectedOption?.skuId ??
    selectedSku?.id ??
    ticketDetails?.skudetails?.[0]?.id;

  const getAvailableStock = useCallback(
    async (sku: any) => {
      if (!sku) return 0;

      const userId = stateUser?.id;
      let cartQty = 0;

      if (userId) {
        const cartDetails = await GET_CART(userId);
        const cartItem = Array.isArray(cartDetails)
          ? cartDetails.find((detail: any) => {
              if (detail?.sku_id != sku?.id) return false;
              if (
                detail?.prodict_id?.id &&
                sku?.productid?.id &&
                detail?.prodict_id?.id != sku?.productid?.id
              )
                return false;
              return true;
            })
          : null;

        cartQty = parseInt(cartItem?.quantity) || 0;
      }

      const stockQty = parseInt(sku?.stock_qty) || 0;
      return Math.max(0, stockQty - cartQty);
    },
    [stateUser?.id],
  );

  const checkStock = useCallback(
    async (sku: any) => {
      const remainingQty = await getAvailableStock(sku);
      setAvailableQty(remainingQty);
      setOutofStock(remainingQty <= 0);
      setQuantity((currentQty) =>
        remainingQty > 0 ? Math.min(currentQty, remainingQty) : 1,
      );
      return remainingQty;
    },
    [getAvailableStock],
  );

  useEffect(() => {
    if (!needsChoice || selected !== null) {
      void checkStock(selectedSku);
    }
  }, [checkStock, needsChoice, selected, selectedSku]);

  const selectedStockQty = Number(
    selectedOption?.stock_qty ?? selectedSku?.stock_qty ?? availableQty ?? 0,
  );
  const maxTicketQty = Math.max(
    1,
    Math.min(selectedStockQty || 1, availableQty ?? (selectedStockQty || 1)),
  );
  const canBuy =
    (!needsChoice || selected !== null) &&
    !outofStock &&
    quantity > 0 &&
    quantity <= maxTicketQty;

  const handleDecrement = () => {
    setQuantity((count) => Math.max(1, count - 1));
  };

  const handleIncrement = () => {
    setQuantity((count) => {
      const limit = Math.max(1, availableQty ?? (selectedStockQty || 1));
      return Math.min(limit, count + 1);
    });
  };

  const handleBuyTickets = useCallback(async () => {
    if (!canBuy || !resolvedProductId || !resolvedSkuId) return;

    const latestAvailableQty =
      availableQty ?? (await getAvailableStock(selectedSku));

    if (
      outofStock ||
      (latestAvailableQty ?? 0) === 0 ||
      quantity > (latestAvailableQty ?? 0)
    ) {
      const availableCount = Math.max(0, latestAvailableQty ?? 0);
      const message =
        availableCount > 0
          ? `Only ${availableCount} ticket${availableCount === 1 ? "" : "s"} available.`
          : "Out of Stock";
      toast(message);
      setQuantity(availableCount > 0 ? Math.min(quantity, availableCount) : 1);
      return;
    }

    let userId: any = stateUser?.id;
    let role = stateUser?.role;
    if (!userId) {
      const userData = await createGuestUser();
      userId = userData.userId;
      role = userData.role;
      dispatch(setToken(userData.token));
    }

    const buyType = await getBuyingType(needsChoice ? "SIZE" : "QUANTITY");
    const cartItems = await GET_CART(userId);
    const filteredItems = cartItems.filter(
      (item: any) =>
        item?.prodict_id?.id == resolvedProductId &&
        item?.sku_id == resolvedSkuId &&
        buyType[0]?.id == item?.buying_type?.id,
    );

    const productBasket = {
      prodict_id: resolvedProductId,
      sku_id: resolvedSkuId,
      currency: 1,
      buying_type: buyType[0]?.id,
      size: null,
      length: null,
      unit: null,
      quantity,
      status: "Active",
    };
    const nextBagCount = (cartItems?.length ?? 0) + 1;

    if (filteredItems?.length) {
      await UPDATE_CART(
        parseInt(filteredItems[0]?.quantity || 0) + quantity,
        filteredItems[0]?.id,
        "quantity",
      );
      toast("item updated to the bag!");
    } else {
      await ADD_TO_CART(productBasket);
      dispatch(setBagCount({ bagCount: nextBagCount }));
      toast("item added to bag");
    }

    setQuantity(1);
    const refreshedAvailableQty = await checkStock(selectedSku);
    if (refreshedAvailableQty <= 0) {
      toast("Out of Stock");
    }
    await queryClient.invalidateQueries({ queryKey: ["cartCount", userId] });
    dispatch(
      setUserDetails({
        data: {
          ...stateUser,
          bagCount: filteredItems?.length ? cartItems?.length : nextBagCount,
          placeOrder: false,
          id: userId,
          role,
        },
      }),
    );
  }, [
    availableQty,
    canBuy,
    checkStock,
    dispatch,
    getAvailableStock,
    getBuyingType,
    needsChoice,
    outofStock,
    quantity,
    queryClient,
    resolvedProductId,
    resolvedSkuId,
    selectedSku,
    stateUser,
  ]);

  return (
    <div>
      {needsChoice && (
        <fieldset className="space-y-[12px]">
          <legend className="sr-only">Choose a booking option</legend>
          {prices!.map((option, index) => (
            <label
              key={`${option.note}-${index}`}
              className="flex cursor-pointer items-start gap-3 text-[14px] leading-[24px] text-s2s-ink"
            >
              <input
                type="radio"
                name={name}
                checked={selected === index}
                onChange={() => setSelected(index)}
                className="mt-[3px] h-[16px] w-[16px] shrink-0 accent-s2s-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-2"
              />
              <span>
                <span className="font-bold tracking-[1.68px] text-s2s-maroon">
                  ₹ {rupees.format(option.amount)}
                </span>{" "}
                {option.note}
              </span>
            </label>
          ))}
        </fieldset>
      )}

      <div
        className={`flex flex-wrap items-center gap-y-4 ${needsChoice ? "mt-[24px]" : ""}`}
      >
        <div
          role="group"
          aria-label="Number of tickets"
          className="flex items-center gap-[14px]"
        >
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1 || outofStock}
            aria-label="One ticket fewer"
            className={`${stepButton} w-[15px] ${quantity <= 1 || outofStock ? "!cursor-not-allowed text-s2s-ink" : ""}`}
          >
            <span aria-hidden className="h-px w-[15px] bg-current" />
          </button>
          <output
            aria-live="polite"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-s2s-maroon text-[14px] leading-none text-s2s-maroon"
          >
            {quantity}
          </output>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={
              quantity >= maxTicketQty ||
              outofStock ||
              (availableQty !== null && availableQty <= 0)
            }
            aria-label="One ticket more"
            className={`${stepButton} w-[14px] ${quantity >= maxTicketQty || outofStock || (availableQty !== null && availableQty <= 0) ? "!cursor-not-allowed text-s2s-ink" : ""}`}
          >
            <span aria-hidden className="absolute h-px w-[14px] bg-current" />
            <span aria-hidden className="absolute h-[14px] w-px bg-current" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => void handleBuyTickets()}
          disabled={!canBuy}
          aria-disabled={!canBuy}
          title={
            canBuy
              ? undefined
              : needsChoice && selected === null
                ? "Choose a booking option first"
                : outofStock
                  ? "This ticket option is out of stock"
                  : quantity > (availableQty ?? 0)
                    ? `Only ${availableQty ?? 0} tickets available`
                    : undefined
          }
          className="ml-[36px] h-[35px] w-[250px] max-w-full rounded-[4px] bg-s2s-maroon text-[15px] font-medium lowercase text-white transition-colors duration-200 hover:bg-[#4d0f14] focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-s2s-maroon/50 disabled:hover:bg-s2s-maroon/50"
        >
          {outofStock ? "out of stock" : "buy tickets"}
        </button>
      </div>
      {/* {selectedSku && (
        <p className="mt-[8px] text-[12px] leading-[18px] text-s2s-ink/80">
          {outofStock ? "Out of Stock" : availableQty !== null ? `${availableQty} ticket${availableQty === 1 ? "" : "s"} available` : "Checking availability..."}
        </p>
      )} */}
    </div>
  );
};

export default TicketPicker;
