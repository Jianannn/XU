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

void merge(element initList[],element mergedList[],int i,int m,int n)
{
	int j,k,t;
	j = m + 1;
	k = i;
	while(i <= m && j <= n)
	{
		if(initList[i].key <= initList[j].key)
		{
			mergedList[k++] = initList[i++];
		}
		else
		{
			mergedList[k++] = initList[j++];
		}
	}
	if(i > m)
	{
		for(t = j;t <= n;t++)
		{
			mergedList[t] = initList[t];
		}
	}
	else
	{
		for(t = i;t <= m;t++)
		{
			mergedList[k + t - i] = initList[t];
		}
	}
}
void mergePass(element initList[],element mergeList[],int n,int s)
{
	int i,j;
	for(i = 1;i <= n - 2 * s + 1;i += 2 * s)
	{
		merge(initList,mergeList,i,i + s - 1,i + 2 * s - 1);
	}
	if(i + s - 1 < n)
	{
		merge(initList,mergeList,i,i + s - 1,n);
	}
	else
	{
		for(j = i;j <= n;j++)
		{
			mergeList[j] = initList[j];
		}
	}
}
const int MAX_SIZE = 100;
void mergeSort(element a[],int n)
{
	int s = 1;
	element extra[MAX_SIZE];
	while(s < n)
	{
		mergePass(a,extra,n,s);
		s *= 2;
		mergePass(extra,a,n,s);
		s *= 2;
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
	
	mergeSort(a,n);//¹é²¢

	out(a,n);//Êä³ö´ð°¸ 
	
	return 0;
}


/*

input: 
26 5 37 1 61 11 59 15 48 19

output:
1 5 11 15 19 26 37 48 59 61

*/
