@dogs
Feature: Open dogs page, selct a dog, and send a treat

  Scenario: tipalti dogs - Kika
    When user opens dogs dropdown menu
    Then dogs dropdown menu includes "Kika"

    When sending a treat to "Kika"
    Then error page opened

  Scenario: tipalti dogs - Lychee
    When user opens dogs dropdown menu
    Then dogs dropdown menu includes "Lychee"

    When sending a treat to "Lychee"
    Then error page opened

  Scenario: tipalti dogs - Kimba
    When user opens dogs dropdown menu
    Then dogs dropdown menu includes "Kimba"

    When sending a treat to "Kimba"
    Then error page opened
