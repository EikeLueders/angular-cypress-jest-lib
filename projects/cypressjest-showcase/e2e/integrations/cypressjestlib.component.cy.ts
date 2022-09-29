import {
  CypressjestLibComponentAction
} from "../../../cypressjest-lib/e2e/src/lib/cypressjest-lib.component.cy-action";
import { AppViewAction } from "../../src/app/app.cy-action";

describe('My custom component', () => {
  it('should be rendered', () => {
    AppViewAction.navigateTo();
    CypressjestLibComponentAction.expectNthVisible();
  });

  it('should be rendered another time', () => {
    AppViewAction.navigateTo();
    CypressjestLibComponentAction.expectNthVisible(1);
  });
})
