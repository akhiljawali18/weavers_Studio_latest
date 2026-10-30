import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        letterSpacing: {
            tightest: "-.075em",
            tighter: "-.05em",
            tight: "-.025em",
            normal: "0",
            wide: ".025em",
            wider: ".05em",
            widest: ".12em",
            xlwidest: ".25em"
        },
        container: {
            center: true,
            padding: "2rem"
        },
        fontFamily: {
            Bodoni: ["var(--font-bodoni-moda)"],
            roboto: ["Rubik", "sans-serif"],
            TTNormsPro: ["var(--font-TTNormsPro)"]
        },
        screens: {
            xxs: "390px",
            xs: "460px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1366px",
            "2xl": "1400px",
            "3xl": "1600px",
            "4xl": "1920px"
        },
        theme: {
            clipPath: {
                mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                mypolygon1: "polygon(0 0, 0% 1%, 0% 100%, 0% 100%)"
            }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                lineDisc: "linear-gradient( 180deg, transparent 30%, rgba(237, 247, 247, 0.5), rgb(255, 255, 255) )",
                blueMagic: "linear-gradient(160deg, #ffffff, #23a6d5, #ffffff,  #23a6d5)",
                "btnblueline-img": "url('/../Images/Makeaorder_border.png')",
                "btnbluelinemob-img": "url('/../Images/ButtonBlueOutline.png')"
            },
            animation: {
                EaseInOut: "lineDisc 1s infinite",
                Wiggle: "wiggle 1s ease-in-out",
                FadeInOut: "FadeIn 1s infinite",
                TextAnimate: "TextAnimate 1s infinite",
                // Sarong to Sari links: gaps running along the underline like a stitch.
                stitch: "stitch 0.6s linear infinite",
                // Sarong to Sari header: the cart icon swells and settles back after "add to cart".
                cartPulse: "cartPulse 0.6s ease-in-out"
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "20%": { transform: "translateY(-10px)" }
                },
                TextAnimate: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" }
                },
                stitch: {
                    from: { maskPosition: "0 0" },
                    to: { maskPosition: "64px 0" }
                },
                cartPulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "35%": { transform: "scale(1.45)" },
                    "65%": { transform: "scale(0.92)" }
                }
            },
            gridTemplateColumns: {
                "14": "repeat(14, minmax(0, 1fr))"
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                txtblue: "hsl(var(--txtblue))",
                txtgrey: "hsl(var(--txtgrey))",
                hoverclr: "hsl(var(--hoverclr))",
                bgdark: "hsl(var(--bgdark))",
                whitetxt: "hsl(var(--whitetxt))",
                lightgrey: "hsl(var(--lightgrey))",
                sidebarbg: "hsl(var(--sidebarbg))",
                mobileactivenav: "hsl(var(--mobileactivenav))",
                bgbrown: "hsl(var(--background-brown))",
                recentsearchbg: "hsl(var(--recentsearchbg))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                error: {
                    DEFAULT: "hsl(var(--error-foreground))",
                    foreground: "hsl(var(--error-foreground))"
                },
                placeholder: {
                    DEFAULT: "hsl(var(--placeholder))"
                },
                // Sarong to Sari microsite palette, taken from the Figma file's named styles.
                s2s: {
                    maroon: "#6a151c",
                    brown: "#7f665b",
                    ink: "#444444",
                    muted: "#666666",
                    gray: "#737373",
                    soft: "#999999",
                    line: "#aaaaaa",
                    panel: "#f8f8f8",
                    tan: "#a39385",
                    gold: "#cd8c3f",
                    sand: "#c3af9d",
                    mist: "#f1f1f1",
                    paper: "#fbfbfb"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            variants: {
                extend: {
                    display: ["group-hover"]
                }
            },
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
                inner: "0 8px 6px -6px rgba(127, 102, 91, 0.1)",
                innerMob: "0px 4px 14px 0px rgba(0, 0, 0, 0.05) inset",
                Story: "0px 0px 16px 0px #7F665B17",
                PDPOverlay: "0px 8px 24px 0px #7F665B33",
                Detailpageotbox: "0px 1px 12px 0px #7F665B2E"
            },
            dropShadow: {
                "3xl": "0 -3px 7px 0px rgba(35, 0, 76, 0.05)",
                textpara: "0px 4px 4px 0px #00000040"
            },
            minWidth: {
                "btn-blueline-wd": "258px !important"
            }
        }
    },
    plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar")({ nocompatible: true }), require("tailwindcss-animate")]
};
export default config;

