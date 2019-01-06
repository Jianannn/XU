#pragma comment(linker, "/STACK:102400000,102400000")
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<math.h>
#include<time.h>
const int maxn = 20000;
struct element
{
	int key;
};
void out(element a[],int n)
{
	int i;
	for(i = 1;i <= n;i++)
	{
		printf("%d",a[i].key);
		if(i != n)
		{
			printf(" ");
		}
	}
	printf("\n");
}

void quickSort(element a[],int left,int right)
{
	int pivot,i,j;
	element temp;
	if(left < right)
	{
		i = left;
		j = right + 1;
		pivot = a[left].key;
		do
		{
			do
			{
				i++;
			}while(a[i].key < pivot);
			do
			{
				j--;
			}while(a[j].key > pivot);
			if(i < j)
			{
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}while(i < j);
		temp = a[left];
		a[left] = a[j];
		a[j] = temp;
		quickSort(a,left,j - 1);
		quickSort(a,j + 1,right);
	}
}
int main(void)
{
	const int n = 10;
	int i;
	element a[n + 10];
	for(i = 1;i <= n;i++)
	{
		scanf("%d",&a[i].key);
	}

	quickSort(a,1,n);//¿ìÅÅ 

	out(a,n);//Êä³ö´ð°¸ 
	
	return 0;
}


/*

input: 
26 5 37 1 61 11 59 15 48 19

output:
1 5 11 15 19 26 37 48 59 61

*/
