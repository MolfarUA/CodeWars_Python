Your task is to implement a Miner class, which will be used for simulating the mining skill in Runescape. In Runescape, users can click on rocks throughout the game, and if the user has the required mining level, they are able to extract the ore contained in the rock.

In this kata, your Miner can mine any of the rocks in the below table, provided they have the required level.

+---------------------------+
| Rock       | Level | XP   |
+----------------------------
| Clay       |  1    | 5    |
| Copper     |  1    | 17.5 |  
| Tin        |  1    | 17.5 |    
| Iron       |  15   | 35   |  
| Silver     |  20   | 40   |   
| Coal       |  30   | 50   |   
| Gold       |  40   | 65   |
+---------------------------+
Each rock you mine will grant your Miner the corresponding amount of experience.

The more experience you gain, the higher your mining level will be. Your mining level is determined by the values in the table below:

+----------------+-----------------+------------------+-----------------+
| Level   | XP   | Level   | XP    | Level   | XP     | Level   | XP    |
+----------------|-----------------+------------------+-----------------+
| 1       | 0    | 11      |  1358 | 21      |  5018  | 31      | 14833 |
| 2       | 83   | 12      |  1584 | 22      |  5624  | 32      | 16456 |
| 3       | 174  | 13      |  1833 | 23      |  6291  | 33      | 18247 |
| 4       | 276  | 14      |  2107 | 24      |  7028  | 34      | 20224 |
| 5       | 388  | 15      |  2411 | 25      |  7842  | 35      | 22406 |
| 6       | 512  | 16      |  2746 | 26      |  8740  | 36      | 24815 |
| 7       | 650  | 17      |  3115 | 27      |  9730  | 37      | 27473 |
| 8       | 801  | 18      |  3523 | 28      |  10824 | 38      | 30408 |
| 9       | 969  | 19      |  3973 | 29      |  12031 | 39      | 33648 |
| 10      | 1154 | 20      |  4470 | 30      |  13363 | 40      | 37224 |
+----------------+-----------------+------------------+-----------------+
The rocks table is preloaded in a dictionary called ROCKS. The name of each rock is a key in the dictionary, and the corresponding value is a tuple of the form (level, xp).
The levels table is preloaded in a dictionary called EXPERIENCE.
To complete this kata, you will need to fill in the mine method for your Miner class. mine takes a single argument as input, rock, which will be the name of a rock in the first table. If you have the required level to mine from the rock, you will gain the corresponding number of experience points.

If you are too low level to mine the rock, mine should return "You need a mining level of {required_level} to mine {rock_name}.".
If you mine the rock, and the experience points gained take you to the next level, mine should return "Congratulations, you just advanced a Mining level! Your mining level is now {new_level}."
If you mine the rock, but don't level up, mine should return "You swing your pick at the rock."
Note:

All input will be valid.
Your Miner may be instantiated with a certain amount of experience, which will always be a positive integer.
The maximum mining level your Miner can achieve is 40. Any excess experience points your Miner gains, or is instantiated with, should not increase your level past 40!
