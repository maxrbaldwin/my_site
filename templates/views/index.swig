{% extends "../layouts/default.swig" %}

{% block content %}
	<section class="deck">
		{% for post in posts %}
		{% if loop.index0 % 3 === 0 %}
			<div class="card-row">
			{% endif %}
			<div class="card left">
				<div class="card-shadow">
					<div class="card-image">
						<a href="/p/{{ post.slug }}"><img src="{{ post.image.url }}" alt="" /></a>
					</div>
					<div class="card-body">
						<ul class="card-categories">
							{% for category in post.categories %}
							<li class="category">
								{% if loop.last %}
									<a class="small" href="/c/{{ category.key }}"><i class="fa fa-circle-o fa-mx"></i> {{ category.name }} </a>
								{% else %}
									<a class="small" href="/c/{{ category.key }}"><i class="fa fa-circle-o fa-mx"></i> {{ category.name }}, </a>
								{% endif %}
							</li>
							{% endfor %}
						</ul>
						<a href="/p/{{ post.slug }}"><h2>{{ post.title }}</h2></a>
						<div class="post-body small">
								{{ post.content.brief | safe }}
						</div>
						<div class="card-date">
							<p class="small"><i class="fa fa-clock-o"></i> {{ post.publishedDate|date('jS \o\f F') }}</p>
						</div>
					</div>
				</div>
			</div>
		{% if loop.index0 % 3 === 0 && loop.index0 !== 0 || loop.last %}
			<div class="clear"></div>
		</div>
		{% endif %}
		{% endfor %}
	</section>
{% endblock %}

{% block title %}
  <title>Max Baldwin | Web Developer, New York Times</title>
{% endblock %}

{% block og-meta %}
	<meta property="og:title" content="Max Baldwin | Web Developer, New York Times" />
	<meta property="og:type" content="news.publishes" />
	<meta property="og:url" content="http://maxrbaldwin.com" />
	<meta property="og:image" content="{{ post.image.url }}" />
{% endblock %}
