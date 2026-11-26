
#include <iostream>
#include <chrono>
#include <cstdlib>
using namespace std::chrono;
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

void merge(int arr[], int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int* L = new int[n1];
    int* R = new int[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];

    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0;
    int j = 0;
    int k = left;

    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }

    delete[] L;
    delete[] R;
}

void mergesort(int arr[], int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        mergesort(arr, left, mid);
        mergesort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

int main()
{
    int size[] = { 10, 100, 1000, 10000, 100000 };

    for (int i = 0; i < 5; i++) {
        int n = size[i];

        int* a = new int[n];
        int* b = new int[n];

        for (int j = 0; j < n; j++) {
            a[j] = rand();
            b[j] = a[j];
        }

        auto start1 = high_resolution_clock::now();
        insertionSort(a, n);
        auto stop1 = high_resolution_clock::now();

        auto insertionTime = duration_cast<microseconds>(stop1 - start1);

        auto start2 = high_resolution_clock::now();
        mergesort(b, 0, n - 1);
        auto stop2 = high_resolution_clock::now();

        auto mergeTime = duration_cast<microseconds>(stop2 - start2);

        cout << "n = " << n << endl;
        cout << "Insertion Sort Time: " << insertionTime.count() <<  endl;
        cout << "Merge Sort Time: " << mergeTime.count()  << endl;
        delete[] a;
        delete[] b;
    }

    return 0;
}