using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;



namespace balls
{
    class program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("who is the first memeber of your party ");
            string name1 = Console.ReadLine();
            Console.WriteLine("who is the second member of you party ");
            string name2 = Console.ReadLine();
            Console.WriteLine("is there another member of your party [Y/N]");
            string choice1 = Console.ReadLine();
            if (choice1 == "y")
            {
                Console.WriteLine("who is the next memeber of the party ");
                string name3 = Console.ReadLine();
                Console.WriteLine("is there any more members of your party? ");
                string ab = Console.ReadLine();
                while (ab == "y")
                {
                    Console.WriteLine("name other member of your party");
                    string name4 = 
                }
            }
        }
    }
}