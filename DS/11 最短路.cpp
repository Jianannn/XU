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

int distance[MAX_VERTICES];
short int found[MAX_VERTICES];

int choose(int distance[],int n,short int found[])
{
	int i,min,minpos;
	min = INT_MAX;
	minpos = -1;
	for(i = 0;i < n;i++)
	{
		if(distance[i] < min && !found[i])
		{
			min = distance[i];
			minpos = i;
		}
	}
	return minpos;
}

void shortestPath(int v)
{
	nodePointer ww;
	int i,u,w;
	for(i = 0;i < n;i++)
	{
		distance[i] = 1000;
		found[i] = FALSE;
	}
	for(ww = graph[v];ww;ww = ww->link)
	{
		distance[ww->vertex] = ww->weight;
	}
	found[v] = TRUE;
	distance[v] = 0;
	for(i = 0;i < n - 2;i++)
	{
		u = choose(distance,n,found);
		found[u] = TRUE;
		for(ww = graph[u];ww;ww = ww->link)
		{
			if(!found[ww->vertex])
			{
				if(distance[u] + ww->weight < distance[ww->vertex])
				{
					distance[ww->vertex] = distance[u] + ww->weight;
				}
			}
		}
	}
}

int main(void)
{
	int i,u,v,w,j;
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
	for(j = 0;j < n;j++)
	{
		printf("Shortest paths from v%d to each vertex are\n",j);
		shortestPath(j);
		for(i = 0;i < n;i++)
		{
			if(i == j)
			{
				continue;
			}
			printf("V%d to V%d   %d\n",i,j,distance[i]);
		}
	}
	return 0;
}


/*

一行为点数和边数，点的编号为0到n-1 
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

输出各点到其它所有点的最短路径，如果两点无法到达，则默认距离为1000 
ouput:
Shortest paths from v0 to each vertex are
V0 to V1   45
V0 to V2   10
V0 to V3   25
V0 to V4   45
V0 to V5   1000
Shortest paths from v1 to each vertex are
V0 to V0   35
V0 to V2   15
V0 to V3   30
V0 to V4   10
V0 to V5   1000
Shortest paths from v2 to each vertex are
V0 to V0   20
V0 to V1   35
V0 to V3   15
V0 to V4   45
V0 to V5   1000
Shortest paths from v3 to each vertex are
V0 to V0   55
V0 to V1   20
V0 to V2   35
V0 to V4   30
V0 to V5   1000
Shortest paths from v4 to each vertex are
V0 to V0   85
V0 to V1   50
V0 to V2   65
V0 to V3   30
V0 to V5   1000
Shortest paths from v5 to each vertex are
V0 to V0   58
V0 to V1   23
V0 to V2   38
V0 to V3   3
V0 to V4   33

*/
