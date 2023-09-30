from django.urls import path

from to_do_list.web.views import IndexView, LoginView, RegisterView, ToDoListView, LogOut

urlpatterns = (
    path('', IndexView.as_view(), name='index'),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('to-do-list', ToDoListView.as_view(), name='to-do-list'),
    path('logout/', LogOut.as_view(), name='logout'),
)
