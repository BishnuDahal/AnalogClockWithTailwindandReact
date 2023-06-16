from django.http import HttpResponse

from django.shortcuts import render

# Create your views here.
def proapp_view(request,*args, **kwargs):
    return render(request, "proapp.html", {
        "my_text": "Hello",
        "my_list": [1313, 4231, 312, "Abc"],
    })