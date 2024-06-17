import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsComumRole } from './decorators/is-comum-role.decorator';
import { IsUniqueEmail } from './decorators/is-unique-email.decorator';

export class CreateUserDto extends User {
  @IsEmail()
  @IsUniqueEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsComumRole({
    message: 'Role must be "Comum"',
  })
  role: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
