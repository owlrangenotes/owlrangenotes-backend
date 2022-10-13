export default class Validate {
  public static isNotEmpty = (param: string | number): boolean => {
    return !(param == null || param == undefined || param === '');
  };

  public static isString = (param: string): boolean => {
    return typeof param == 'string' && typeof param != 'number';
  };

  public static isNumber = (param: number): boolean => {
    return !isNaN(param) && typeof param == 'number';
  };

  public static isBoolean = (param: boolean): boolean => {
    return typeof param == 'boolean';
  };
}