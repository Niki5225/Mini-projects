from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import views as auth_views, get_user_model, login
from django.views import generic as views
from django.urls import reverse_lazy

from to_do_list.web.forms import RegisterUserForm

UserModel = get_user_model()


class RegisterView(views.CreateView):
    template_name = 'register.html'
    form_class = RegisterUserForm
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        result = super().form_valid(form)
        user = self.object

        login(self.request, user)

        return result


class LoginView(auth_views.LoginView):
    success_url = reverse_lazy('index')
    template_name = 'login.html'
    model = UserModel


class IndexView(views.TemplateView):
    template_name = 'index.html'


class ToDoListView(LoginRequiredMixin, views.TemplateView):
    template_name = 'to-do-list.html'


class LogOut(LoginRequiredMixin, views.TemplateView):
    next_page = reverse_lazy('index')
