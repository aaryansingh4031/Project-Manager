import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/routes/auth/auth-layout.tsx", [
        index("routes/routes/root/home.tsx"),
        route("sign-in", "routes/routes/auth/sign-in.tsx"),
        route("sign-up", "routes/routes/auth/sign-up.tsx"),
        route("forgot-password", "routes/routes/auth/forgot-password.tsx"),
        route("reset-password", "routes/routes/auth/reset-password.tsx"),
        route("verify-email", "routes/routes/auth/verify-email.tsx"),
    ]),
    layout("routes/routes/dashboard/dashboard-layout.tsx", [
        route("dashboard", "routes/routes/dashboard/index.tsx"),
        route("workspaces", "routes/routes/dashboard/workspaces/index.tsx"),
        route(
                "workspaces/:workspaceId",
                "routes/routes/dashboard/workspaces/workspace-details.tsx"
            ),
        route(
                "workspaces/:workspaceId/projects/:projectId",
                "routes/routes/dashboard/project/project-details.tsx"
            ),
        route(
                "workspaces/:workspaceId/projects/:projectId/tasks/:taskId",
                "routes/routes/dashboard/task/task-details.tsx"
            ),
        route("my-tasks", "routes/routes/dashboard/my-tasks.tsx"),
        route("members", "routes/routes/dashboard/members.tsx"),
    ]),

        route(
                "workspace-invite/:workspaceId",
                "routes/routes/dashboard/workspaces/workspace-invite.tsx"
            ),

    layout("routes/routes/user/user-layout.tsx", [
        route("user/profile", "routes/routes/user/profile.tsx"),
    ]),
] satisfies RouteConfig;
