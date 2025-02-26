import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email("E-mail inválido"),
	password: z
		.string()
		.min(8, "A senha deve ter no mínimo 8 caracteres")
		.max(100, "A senha deve ter no máximo 100 caracteres")
		.regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
		.regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
		.regex(/[0-9]/, "A senha deve conter pelo menos um número")
		.regex(
			/[^A-Za-z0-9]/,
			"A senha deve conter pelo menos um caractere especial"
		)
		.trim(),
});

export async function handleLogin(currentState: any, formData: FormData) {
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const result = loginSchema.safeParse(data);

	if (!result.success) {
		return {
			success: false,
			errors: result.error.flatten().fieldErrors,
		};
	}


	return { success: true, message: "Login realizado com sucesso!" };
}
