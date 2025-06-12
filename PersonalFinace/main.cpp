#include <iostream>
#include <ctime>
using namespace std;

int main() {
    int expense;
    string title;
    string date;
    vector<string> categories = {};



    cout << "Enter your expense: ";
    cin >> expense;
    cout << "Enter the title: ";
    cin >> title;

    std::time_t dated = std::time(nullptr);
    date = std::asctime(std::localtime(&dated));

    cout << expense;
    cout << title;
    cout << date;




    return 0;
}
