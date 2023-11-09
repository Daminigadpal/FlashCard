import * as Yup from "yup";

const FlashCardSchema = Yup.object().shape({
  groupid: Yup.string(),
  groupname: Yup.string()
    .max(20, "Must be less than 20 characters")
    .min(3, "Group Name Must be More Than 5 Characters")
    .required("Please , Enter Group Name !"),
  groupdescription: Yup.string().max(
    500,
    " Group Description must be less than 500 characters"
  ),

  groupimg: Yup.mixed(),

  cards: Yup.array().of(
    Yup.object().shape({
      cardid: Yup.string(),
      cardname: Yup.string()
        .max(30, "Must be less than 20 characters")
        .min(3, "Group Name Must be More Than 3 Characters")
        .required(" Input Required !"),
      carddescription: Yup.string()
        .min(20, "Must be more than 20 characters")
        .max(300, " Must be less than 300 characters")
        .required(" Input Required !"),
        cardImg:Yup.string(),
    })
  ),
  createdOn: Yup.date().default(() => new Date()),
});

export default FlashCardSchema;