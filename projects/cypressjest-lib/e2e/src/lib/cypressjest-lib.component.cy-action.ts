
export class CypressjestLibComponentAction {
  public static expectNthVisible(index: number = 0): typeof CypressjestLibComponentAction {
    cy.get('[data-cy=cmp]').eq(index).should('be.visible');
    return CypressjestLibComponentAction;
  }
}
