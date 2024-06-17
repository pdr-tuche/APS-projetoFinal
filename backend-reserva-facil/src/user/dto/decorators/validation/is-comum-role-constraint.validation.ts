// Custom validator for role
import {
  ValidationArguments,
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
