import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): string;
    findAll(): string;
    findOne(id: string): string;
    edit(id: string, updateDto: UpdateUsuarioDto): void;
    disable(id: string): void;
    enable(id: string): void;
}
