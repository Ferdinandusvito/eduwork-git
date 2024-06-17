const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'
const RESULT = '.top_offset'
const LIST = 'a'

class searchPage{
    static visit() {
        cy.visit(URL)
    }

    static searchBox(text) {
        cy.get(SEARCH).type(text)
    }

    static messageBox(message) {
        cy.get(RESULT).contains(message)
    }

    static listBox(list) {
        cy.get(LIST).contains(list)
    }
}

export default searchPage;