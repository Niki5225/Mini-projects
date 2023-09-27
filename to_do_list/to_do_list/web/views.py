from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import views as auth_views
from django.views import generic as views
from django.shortcuts import render
from django.urls import reverse_lazy

from to_do_list.web.forms import RegisterUserForm


# Create your views here.

class RegisterView(views.CreateView):
    template_name = 'register.html'
    form_class = RegisterUserForm


class LoginView(auth_views.LoginView):
    success_url = reverse_lazy('index')


class IndexView(views.TemplateView, LoginRequiredMixin):
    template_name = 'index.html'
