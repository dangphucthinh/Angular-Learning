import {ButtonOptions} from './button'

export class CardOptions {
    title: string;
    subtitle: string;
    color: string;
    buttons?: ButtonOptions[];
}

export const Cards = [
    {
      title: "Card 1",
      subtitle: "Some example text",
      color: "card bg-default text-black",
      buttons: [
        { title: "OK", bootstrapClass: "btn btn-primary" },
        { title: "Cancel", bootstrapClass: "btn btn-danger" }
      ]
    },
    {
      title: "Card 2",
      subtitle: "Some example text",
      color: "card bg-default text-black",
      buttons: [
        { title: "OK", bootstrapClass: "btn btn-primary" },
        { title: "Cancel", bootstrapClass: "btn btn-danger" }
      ]
    }
  ];
  