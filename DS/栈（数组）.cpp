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
	if(IsEmpty())
	{
		return;
	}
	top--;
}
int main(void)
{
	
	return 0;
}
