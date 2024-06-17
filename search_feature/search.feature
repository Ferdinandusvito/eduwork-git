Feature: Transaction Search
    As a user
    I want to use search feature to find transaction

    Scenario: Search transactions with "transfer" keyword
        Given I am on the homepage
        And I put the keyword "transfer" into the search box
        When I press enter on keyboard
        Then I see search result for "transfer"

    Scenario: Search transactions with invalid keyword
        Given I am on the homepage
        And I put the keyword "xxx" into the search box
        When I press enter on keyboard
        Then I see search result "No results were found for the query: xxx"

    Scenario: Search with empty search box
        Given I am on the homepage
        And I put nothing into the search box
        When I press enter on keyboard
        Then I see search result for all available transactions