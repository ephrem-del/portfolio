"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../components/lib/firebase";
import FormComponent from "../../components/dashboard/form-component";
import LoginForm from "../../components/dashboard/authForm";
import { onAuthStateChanged } from "firebase/auth";

export default function DashboardPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      try {
        if (user) {
          const idTokenResult = await user.getIdTokenResult(true);

          console.log("User token claims:", idTokenResult.claims);

          if (user.email === "ermiaseat1987@gmail.com") {
            localStorage.setItem("isAdmin", "true");
            localStorage.setItem("email", user.email || "");
            setIsAuthorized(true);
          } else {
            console.log("User is not admin. Redirecting...");
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("email");
            setIsAuthorized(false);
          }
        } else {
          console.log("No user logged in.");
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("email");
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error("Error verifying token claims:", error);
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("email");
        setIsAuthorized(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{isAuthorized ? <FormComponent /> : <LoginForm />}</>;
}
