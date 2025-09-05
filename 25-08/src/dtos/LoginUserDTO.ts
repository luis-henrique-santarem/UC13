import { IsEmail, isNotEmpty, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUserDTO {
    @IsNotEmpty({ message: "O campo Email deve ser preenchido" })
    @IsEmail({}, { message: "E-mail invalido"})
    @MaxLength(50, { message: "E-mail deve ter no máximo 100 caracteres" })
    email: string;

     @MinLength(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    @Matches(/(?=.*[a-z])/, { message: "Senha deve conter pelo menos uma letra minúscula" })
    @Matches(/(?=.*[A-Z])/, { message: "Senha deve conter pelo menos uma letra maiúscula" })
    @Matches(/(?=.*\d)/, { message: "Senha deve conter pelo menos um número" })
    @Matches(/(?=.*[@$!%*?&])/, { message: "Senha deve conter pelo menos um caractere especial (@$!%*?&)" })
    password: string;
}