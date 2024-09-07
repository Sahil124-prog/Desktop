#include <stdio.h>

int main() {
    float principal, rate, time, si;

    printf("Enter Principal Amount: ");
    fflush(stdout);
    scanf("%f", &principal);

    printf("Enter Rate (in percentage): ");
    fflush(stdout);
    scanf("%f", &rate);

    printf("Enter Time (in years): ");
    fflush(stdout);
    scanf("%f", &time);

    si = (principal * rate * time) / 100;

    printf("Your simple interest is: %f\n", si);

    return 0;
}