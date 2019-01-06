#include<stdio.h>
#include<string.h>
#include<stdlib.h>
typedef struct node *treePointer;
typedef struct node
{
	char data;
	treePointer leftChild, rightChild;
};
treePointer root;
void postorder(treePointer ptr)
{
	if (ptr != NULL)
	{
		postorder(ptr->leftChild);
		postorder(ptr->rightChild);
		printf("%c", ptr->data);
	}
}
