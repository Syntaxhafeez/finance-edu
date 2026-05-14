import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("ledgerwise_session");
  if (!session) return null;
  return {
    id: "demo-user",
    email: "editor@ledgerwise.com",
    role: "ADMIN"
  };
}

export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return user;
}
