{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="post-container">
		<article>
			{% if not post %}
				<h2>Invalid Post.</h2>
			{% else %}
				<div class="post">
					{% if post.image.exists %}
						<div class="image">
							<img src="{{ post.image.url }}" class="img-responsive">
						</div>
					{% endif %}
					<header>
						<h1>{{ post.title }}</h1>
					</header>
					{% if post.publishedDate %}
							<h5>{{ post._.publishedDate.format("MMMM Do, YYYY") }}</h5>
					{% endif %}
					<ul class="card-categories">
						{% for category in post.categories %}
						<li class="category">
							{% if loop.last %}
								<a class="small" href="/c/{{ category.key }}">{{ category.name }} </a>
							{% else %}
								<a class="small" href="/c/{{ category.key }}">{{ category.name }}, </a>
							{% endif %}
						</li>
						{% endfor %}
					</ul>
					<div class="post-article">
						{{ post.content.full | raw }}
					</div>
				</div>
			{% endif %}
		</article>
	</div>
{% endblock %}


{% block title %}
  <title>{{ post.title }} | Max Baldwin</title>
{% endblock %}

{% block og-meta %}
	<meta property="og:title" content="{{ post.title }}" />
	<meta property="og:type" content="news.publishes" />
	<meta property="og:url" content="http://maxrbaldwin.com/p/{{ post.slug }}" />
	<meta property="og:image" content="{{ post.image.url }}" />
{% endblock %}
