export default class Constants {
  static readonly emailValidationPattern =
    '^(([^<>()[]\\.,;:s@\\"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'

  static readonly personNameValidationPattern = '^[A-Za-z]+$'
  static readonly alphanNumericValidationPattern = '^[a-zA-Z0-9]+$'
}
