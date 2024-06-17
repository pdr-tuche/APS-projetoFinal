import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsComumRoleConstraint } from './validation/is-comum-role-constraint.validation';

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
