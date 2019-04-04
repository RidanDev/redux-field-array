import { formValueSelector } from "redux-form";

const selector = formValueSelector("myForm");
export const clubSelector = state => selector(state, "clubName");
export const membersSelector = state => selector(state, "members");
