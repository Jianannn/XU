#include<stdio.h>
#include<stdlib.h>
#include<string.h>
const int MAX_VERTICES = 110;
#define FALSE 0
#define TRUE 1
short int visited[MAX_VERTICES];
int n,m;
typedef struct node *nodePointer;
typedef struct node
{
	int vertex;
	int weight;
	nodePointer link;
};
nodePointer graph[MAX_VERTICES];

void add(int u,int v,int w)
{
	nodePointer tmp = (nodePointer)malloc(sizeof(nodePointer));
	tmp->vertex = v;
	tmp->weight = w;
	tmp->link = graph[u];
	graph[u] = tmp;
}

void dfs(int v)
{
	nodePointer w;
	visited[v] = TRUE;
	printf("V%d  ",v);
	for(w = graph[v];w;w = w->link)
	{
		if(!visited[w->vertex])
		{
			dfs(w->vertex);
		}
	}
}

int main(void)
{
	int i,u,v,w;
	for(i = 0;i < MAX_VERTICES;i++)
	{
		graph[i] = NULL;
	}
	scanf("%d %d",&n,&m);
	for(i = 0;i < m;i++)
	{
		scanf("%d %d %d",&u,&v,&w);
		add(u,v,w);
	}
	memset(visited,FALSE,sizeof(visited));
	printf("The sequence of vertex names getting from Depth-First Search (from 'V1'):\n");
	dfs(1);
	for(i = 0;i < n;i++)
	{
		if(!visited[i])
		{
			dfs(i);
		}
	}
	printf("\n");
	return 0;
}


/*

第一行为点数和边数，点的编号为0到n-1 
0 1 50代表0到1的距离为50 
input: 
6  11
0  1  50
0  2  10
0  4  45
1  2  15
1  4  10
2  0  20
2  3  15
3  1  20
3  4  35
4  3  30
5  3  3

从点1开始做深搜 
ouput:
V1  V4  V3  V2  V0  V5

*/ 
