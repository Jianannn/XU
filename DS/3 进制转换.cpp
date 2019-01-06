#include<stdio.h>
const int N = 100010;
int st[N],top;
inline void Create(void)
{
	top = -1;
}
inline int IsFull(void)
{
	if(top == N - 1)
	{
		return 1;
	}
	return 0;
}
inline void Push(int v)
{
	if(IsFull())
	{
		return;
	}
	st[++top] = v;
}
inline int IsEmpty(void)
{
	if(top == -1)
	{
		return 1;
	}
	return 0;
}
inline void Pop(void)
{
	if(IsEmpty)
	{
		return;
	}
	top--;
}
int main(void)
{
	int n,i;
	while(1)
	{
		printf("Please input the decimal number: ");
		scanf("%d",&n);
		if(n == -1)
		{
			break;
		}
		int nn = n;
		top = 0;
		while(n)
		{
			Push(n % 2); 
			n /= 2;
		}
		printf("The corresponding binary version is: ");
		for(i = top;i >= 1;i--)
		{
			printf("%d",st[i]);
		}
		printf("\n");
	}
	printf("Bye!\n");
	return 0;
}


/*

十进制转换成二进制
(输入-1结束)

input:
15

output:
1111 

*/ 
