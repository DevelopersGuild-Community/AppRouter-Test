"use client";

import { useFormState, } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { LoginForm } from "./login-form";


export default function ConnectedLoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    return (
        <LoginForm errorMessage={errorMessage} dispatch={dispatch} />
    );
}

