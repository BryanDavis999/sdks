# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name                  = 'onvo'
  s.version               = '0.0.1'
  s.summary               = 'Communicate with the Onvo platform.'
  s.description           = 'A gem to provide utilities to seamlessly communicate with the Onvo platform, allowing developers to integrate AI-powered dashboards into their products.'
  s.authors               = ['Bryan Davis', 'Ronnel Davis']
  s.email                 = ['bryandavis999.dev@gmail.com']
  s.homepage              = ['https://github.com/onvo-ai/sdks']
  s.files                 = Dir['lib/**/*']
  s.require_paths         = ['lib', 'lib/onvo']
  s.required_ruby_version = '>= 2.6.0'

  s.add_dependency          'httparty', '~> 0.13.7'
end
