#include <stdio.h>
#include <cs50.h>
#include <math.h>

void printit(int);

int main(void)
{
    long long number = get_long("Number: ");
    int length = log10(number) + 1;
    printf("length is: %i\n", length);
    
    if ((length == 13 || length == 15 || length == 16) && length < 17)
    {
        int array[length];
        
        for (int i = length; i > 0; i--) 
        {
            array[length - i] = (long)(number / pow(10, i - 1)) % 10;
            // printf("%i : %i\n", length-i, array[length - i]);
        }
        
        int magicNumber = 0;
        
        length -= 2;
        for (int x = length; x > -1; x -= 2)
        {
            // loop array to check #
            int foundNumber = array[x] * 2;
            int new = 0;
            printf("%i\n", array[x]);
            
            if (foundNumber > 9)
            {
                new = foundNumber % 10 + floor(foundNumber / 10);
            }
            else
            {
                new = foundNumber;
            }
            magicNumber += new;
        }
        // printf("VALID\n");
        printf("1st Magic Number is: %i\n", magicNumber);
        
        int magicNumber2 = 0;
        
        length += 1;
        for (int x = length; x > -1; x -= 2)
        {
            // loop array to check #
            printf("%i\n", array[x]);
            magicNumber2 += array[x];
        }
        // printf("VALID\n");
        printf("2nd Magic Number is: %i\n", magicNumber2);
        
        int total = magicNumber + magicNumber2;
        printf("Total is: %i\n", total);
        length++;
        
        if (total % 10 == 0 && (length) == 15 && array[0] == 3 && (array[1] == 4 || array[1] == 7))
        {
            printf("Length is: %i\nAMEX\n", length);
        }
        else if (total % 10 == 0 && (length) == 16 && array[0] == 5 && (array[1] == 1 || array[1] == 2 || array[1] == 3 || array[1] == 4
                 || array[1] == 5))
        {
            printf("Length is: %i\nMASTERCARD\n", length);
        }
        else if (total % 10 == 0 && ((length) == 13 || (length == 16)) && array[0] == 4)
        {
            printf("Length is: %i\nVISA\n", length);
        }
        else
        {
            printf("Length is: %i\nINVALID\n", length);
        }
    }
    else
    {
        printf("INVALID\n");
    }
}