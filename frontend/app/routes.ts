import { type RouteConfig, index, route, layout, } from "@react-router/dev/routes";

export default [
    layout("routes/routes/auth/auth-layout.tsx",[
        index("routes/routes/home.tsx"),
        route("sign-in", "routes/routes/auth/sign-in.tsx"),
        route("sign-up", "routes/routes/auth/sign-up.tsx"),
        route("forgot-password", "routes/routes/auth/forgot-password.tsx"),
        route("reset-password", "routes/routes/auth/reset-password.tsx"),
        route("verify-email", "routes/routes/auth/verify-email.tsx"),
    ])
] satisfies RouteConfig;
