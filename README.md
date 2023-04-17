# textonyms
A webpage that converts a phone number or phone word to its other equivalent phone words. Try it out [here](https://textonyms.com).

On a phone keypad, each of the digits corresponds to a set of letters:
0: "0",
1: "1",
2: "ABC",
3: "DEF",
4: "GHI",
5: "JKL",
6: "MNO",
7: "PQRS",
8: "TUV",
9: "WXYZ"

This allows phone number to be represented as words. For instance, "CAT" could be expressed as "228", because "2" maps to "A" and "C" while "8" maps to "T".

The webpage works by searching all of the possible equivalent expressions for a given phone number, and filtering out which of them are composed entirely of English words. Users can then further filter the results by clicking on words in the results, or by typing them into another text box to remove them from the valid word list. Results are sorted from least to most individual words.

Phone numbers can be entered in any format. All punctuation is automatically removed, and all letters are automatically converted to numbers, before the number is processed.

Phone numbers with 0 or 1 in them have considerably reduced word possibilities, since those numbers do not map to any letters.

If you feel that the program is missing a word that should have appeared in the results, let me know so I can add it!

## Example Uses

### Convert Number to Words
Say your phone number is (000) 686-2377. Enter this into the top box and click "Find Word Combinations". The first result is "Numbers". Your phone number can be written as "(000) NUMBERS". 

If you wanted to find another combination, you can continue scrolling down the list. Say you see the word "MUN" come up a lot and you don't want to see resutls containing that word since you're not interested in Model United Nations at all. Just click on that word and all of the results containing that word will disappear. 

### Convert Words to Number
Say you see the phone number EXA-MPLE and want to convert it to the equivalent phone number without having to pull out your phone. The results list that appears after you click "Find Word Combinations" contains the raw numeric equivalent of your input, in this case "3926753".

### Convert Words to Words
Say you want to feel smugly superior to someone with a fancy custom LAW-YERS phone number. Type "Lawyers" into the top box and click "Find Word Combinations". Scroll down a bit and you'll see that their fancy custom phone number also spells "Lazy Esq.". 
