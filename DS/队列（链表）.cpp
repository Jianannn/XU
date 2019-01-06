#include<stdio.h>
#include<stdlib.h>
#include<string.h>
const int MAX_VERTICES = 110;
#define FALSE 0
#define TRUE 1
typedef struct queue *queuePointer;
typedef struct queue
{
	int vertex;
	queuePointer link;
};
queuePointer front,rear;

void CreateQueue(void)
{
	front = NULL;
	rear = NULL;
}

int IsEmpty(void)
{
	if(front == NULL)
	{
		return 1;
	}
	return 0;
}

void DisposeQueue(queuePointer Queue)
{
	if(Queue != NULL)
	{
		free(Queue);
	}
}

void MakeEmpty(void)
{
	front = NULL;
	rear = NULL;
}

void EnQueue(queuePointer v)
{
	queuePointer tmp = (queuePointer)malloc(sizeof(queuePointer));
	tmp = v;
	if(!front)
	{
		front = tmp;
	}
	else
	{
		rear->link = tmp;
	}
	rear = tmp;
}

queuePointer Front(void)
{
	return front;
}

void DeQueue(void)
{
	if(IsEmpty())
	{
		return;
	}
	queuePointer tmp = front->link;
	front = tmp;
	free(tmp);
}

int main(void)
{
	return 0;
}
