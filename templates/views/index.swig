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
							<i class="fa fa-circle-o"></i>
							{% for category in post.categories %}
							<li class="category">
								{% if loop.last %}
									<a href="/c/{{ category.key }}">{{ category.name }} </a>
								{% else %}
									<a href="/c/{{ category.key }}">{{ category.name }}, </a>
								{% endif %}
							</li>
							{% endfor %}
						</ul>
						<a href="/p/{{ post.slug }}"><h2>{{ post.title }}</h2></a>
						<div>
							{{ post.content.brief | safe }}
						</div>
						<div class="card-date">
							<i class="fa fa-clock-o"></i> {{ post.publishedDate|date('jS \o\f F') }}
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
