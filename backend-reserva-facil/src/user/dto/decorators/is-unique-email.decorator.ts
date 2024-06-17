import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueEmailConstraint } from './validation/is-unique-email-constraint.validation';

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueEmailConstraint,
    });
  };
}
