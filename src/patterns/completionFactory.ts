export default class CompletionFactory {
  createCompletion(type: CompletionType, parameters: [String]): Completion {
    switch (type) {
      case CompletionType.Checkmark:
        return {
          type: "Checkmark",
          parameters: parameters,
        };
      case CompletionType.Note:
        return {
          type: "Note",
          parameters: parameters,
        };
      case CompletionType.Signature:
        return {
          type: "Signature",
          parameters: parameters,
        };
      case CompletionType.Rating:
        return {
          type: "Rating",
          parameters: parameters,
        };
    }
  }
}

abstract class Completion {
  type: String;
  parameters: [String];
  complete: () => void;

  constructor(type: String, parameters: [String], complete: () => void) {
    this.type = type;
    this.parameters = parameters;
    this.complete = complete;
  }
}

class NoteCompletion extends Completion {}

enum CompletionType {
  Checkmark,
  Note,
  Signature,
  Rating,
}
