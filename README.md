## LinkedIn Word Game Proxy Server

Simple Node server that allows us to make a GET request for words from the LinkedIn words API. If necessary, parameters can be specified. You can find the [game client](https://github.com/ausyau/word-game-client)

Example: `GET BASE_URL/words`
#### LinkedIn API Query Parameters
|Name|Legal Values|Purpose|
|-|-|-|
|`difficulty`|Integer from 1-10|Filters returned words based on the difficulty level provided: 1 is the lowest level and 10 is the highest level.
|`minLength`|Integer >= 0|Filters returned words to ensure they are at least aslong as the provided length. Providing 0 will return all words, providing a number larger than the length of the longest word will return an empty result.
|`maxLength`|Integer >= 0|Filters returned words to ensure they are shorter than the provided length. Providing 0 will return an empty result, providing a number larger than the length of the longest word will return all words.
|`start`|Integer >= 0|Filters returned words to ignore the first “start” words in the list. Providing a number larger than the number of words that would be returned results in an empty result.
|`count`|Integer >= 0|Filters returned words to return up to “count” words. Providing 0 will return an empty result. 


#### Node Server Response
```
{
  data: transaction array
}
```