# Snake Game (Python - Pygame)
# Install with: pip install pygame
import pygame, random, sys
pygame.init()
W=600; H=600; size=20
screen=pygame.display.set_mode((W,H))
clock=pygame.time.Clock()
snake=[(5,5)]
direction=(1,0)
food=(10,10)
score=0
def place_food():
    global food
    food=(random.randrange(W//size), random.randrange(H//size))
def draw():
    screen.fill((5,6,7))
    for i,(x,y) in enumerate(snake):
        c=(0,230,230) if i==0 else (0,204,204)
        pygame.draw.rect(screen,c,(x*size,y*size,size-2,size-2))
    pygame.draw.rect(screen,(255,60,60),(food[0]*size,food[1]*size,size-2,size-2))
    pygame.display.flip()
place_food()
while True:
    for e in pygame.event.get():
        if e.type==pygame.QUIT: pygame.quit(); sys.exit()
        if e.type==pygame.KEYDOWN:
            if e.key in (pygame.K_LEFT,pygame.K_a) and direction!=(1,0): direction=(-1,0)
            if e.key in (pygame.K_RIGHT,pygame.K_d) and direction!=(-1,0): direction=(1,0)
            if e.key in (pygame.K_UP,pygame.K_w) and direction!=(0,1): direction=(0,-1)
            if e.key in (pygame.K_DOWN,pygame.K_s) and direction!=(0,-1): direction=(0,1)
    head=( (snake[0][0]+direction[0])% (W//size), (snake[0][1]+direction[1])% (H//size) )
    if head in snake: pygame.quit(); sys.exit()
    snake.insert(0, head)
    if head==food: score+=1; place_food()
    else: snake.pop()
    draw(); clock.tick(12)
