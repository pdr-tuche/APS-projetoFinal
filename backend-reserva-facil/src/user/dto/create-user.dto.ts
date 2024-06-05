import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

// Custom validator for role
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsComumRoleConstraint implements ValidatorConstraintInterface {
  validate(role: any, args: ValidationArguments) {
    return role === 'Comum';
  }

  defaultMessage(args: ValidationArguments) {
    return 'Role must be "Comum"';
  }
}

export function IsComumRole(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsComumRoleConstraint,
    });
  };
}

export class CreateUserDto extends User {
  @IsEmail()
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
