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

void adjust(element a[],int root,int n)
{
	int child,rootkey;
	element temp;
	temp = a[root];
	rootkey = a[root].key;
	child = 2 * root;
	while(child <= n)
	{
		if((child < n) && (a[child].key < a[child + 1].key))
		{
			child++;
		}
		if(rootkey > a[child].key)
		{
			break;
		}
		else
		{
			a[child / 2] = a[child];
			child *= 2;
		}
	}
	a[child / 2] = temp;
}
void heapSort(element a[],int n)
{
	int i,j;
	element temp;
	for(i = n / 2;i > 0;i--)
	{
		adjust(a,i,n);
	}
	for(i = n - 1;i > 0;i--)
	{
		temp = a[1];
		a[1] = a[i + 1];
		a[i + 1] = temp;
		adjust(a,1,i);
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

	heapSort(a,n);//堆排（最大堆）
	
	out(a,n);//输出答案 
	
	return 0;
}


/*

input: 
26 5 37 1 61 11 59 15 48 19

output:
1 5 11 15 19 26 37 48 59 61

*/
