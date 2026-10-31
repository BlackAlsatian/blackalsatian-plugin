<?php

/**
 * BlackAlsatian Plugin
 *
 * @package           BlackAlsatian
 * @author            Björn Potgieter
 * @copyright         2020 Black Alsatian
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       BlackAlsatian
 * Plugin URI:        https://www.blackalsatian.co.za
 * Description:       Plugin used for Black Alsatian websites.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Björn Potgieter
 * Author URI:        https://bjorn.africa
 * Text Domain:       blackalsatian
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined('ABSPATH') || exit;

 /**
 * Activate the plugin.
 */
function blackals_activate()
{
    // Trigger our function that registers the custom post type plugin.
    blackals_setup_post_type();
    // blackals_register_meta();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'blackals_activate');

// ##### Blocks ####

/**
 * Register private category for custom blocks
 *
 */
function blackalsatian_blocks_categories($categories, $post)
{
    // if ( $post->post_type !== 'post' ) {
    //     return $categories;
    // }
    return array_merge(
        array(
            array(
                'slug' => 'blackalsatian-blocks',
                'title' => __('Black Alsatian', 'blackalsatian-blocks'),
                'icon'  => 'dashicons-buddicons-activity',
            ),
        ),
        $categories,
    );
}
add_filter('block_categories', 'blackalsatian_blocks_categories', 10, 2);

// Register custom blocks

function blackalsatian_blocks_init()
{
    $dir = dirname(__FILE__);

    $script_asset_path = "$dir/build/index.asset.php";
    if (! file_exists($script_asset_path)) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "blackalsatian/blocks" block first.'
        );
    }
    $index_js     = 'build/index.js';
    $script_asset = require($script_asset_path);
    wp_register_script(
        'blackalsatian-blocks-editor',
        plugins_url($index_js, __FILE__),
        $script_asset['dependencies'],
        $script_asset['version']
    );
    wp_set_script_translations('blackalsatian-blocks-editor', 'blocks');

    $editor_css = 'build/index.css';
    wp_register_style(
        'blackalsatian-blocks-editor',
        plugins_url($editor_css, __FILE__),
        array(),
        filemtime("$dir/$editor_css")
    );

    $style_css = 'build/style-index.css';
    wp_register_style(
        'blackalsatian-blocks',
        plugins_url($style_css, __FILE__),
        array(),
        filemtime("$dir/$style_css")
    );

    register_block_type('blackalsatian/blocks', array(
        'editor_script' => 'blackalsatian-blocks-editor',
        'editor_style'  => 'blackalsatian-blocks-editor',
        'style'         => 'blackalsatian-blocks',
    ));
}
add_action('init', 'blackalsatian_blocks_init');

// ### end Blocks category ####

function my_excerpt_length($length)
{
    return 50;
}
    add_filter('excerpt_length', 'my_excerpt_length');
/**
 * Register custom post types
 */
function blackals_setup_post_type()
{
    // "services" custom post type
    register_post_type(
        'service',
        array(
            'label'               => __('services', 'service'),
            'description'         => __('Our services', 'service'),
            'labels' => array(
                'name'                => __('Services', 'service'),
                'singular_name'       => __('Service', 'service'),
                'menu_name'           => __('Services', 'service'),
                'parent_item_colon'   => __('Parent Service', 'service'),
                'all_items'           => __('All Services', 'service'),
                'view_item'           => __('View Service', 'service'),
                'add_new_item'        => __('Add New Service', 'service'),
                'add_new'             => __('Add New', 'service'),
                'edit_item'           => __('Edit Service', 'service'),
                'update_item'         => __('Update Service', 'service'),
                'search_items'        => __('Search Service', 'service'),
                'not_found'           => __('Not Found', 'service'),
                'not_found_in_trash'  => __('Not found in Trash', 'service'),
            ),
            'supports'       => array(
                'title',
                'editor',
                'excerpt',
                'thumbnail',
                'revisions',
                'custom-fields',
             ),
            'hierarchical'   => true,
            'menu_icon' => 'dashicons-format-status',
            'can_export' => true,
            'taxonomies' => array(
                'post_tag',
            ),
            'public'         => true,
            'show_ui'        => true,
            'show_in_menu'   => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'menu_position'  => 6,
            'has_archive'    => true,
            'rewrite'        => array(
                'slug' => 'services',
                'with_front' => true,
            ),
            'show_in_rest'   => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'Service',
            'graphql_plural_name' => 'Services',
        )
    );

    // "portfolio" custom post type
    register_post_type(
        'portfolio',
        array(
            'labels' => array(
                'name' => __('Portfolio', 'portfolio'),
                'singular_name' => __('Project', 'portfolio'),
                'add_new' => __('Add New', 'portfolio'),
                'add_new_item' => __('Add New Project', 'portfolio'),
                'edit' => __('Edit', 'portfolio'),
                'edit_item' => __('Edit Project', 'portfolio'),
                'new_item' => __('New Project', 'portfolio'),
                'view' => __('View Portfolio', 'portfolio'),
                'view_item' => __('View Project', 'portfolio'),
                'search_items' => __('Search Portfolio', 'portfolio'),
                'not_found' => __('No Projects found', 'portfolio'),
                'not_found_in_trash' => __('No Projects found in Trash', 'portfolio'),
            ),
            'public' => true,
            'hierarchical' => true,
            'has_archive' => true,
            'rewrite'        => array(
                'slug' => 'portfolio',
            ),
            'supports' => array(
                'title',
                'editor',
                'thumbnail',
                'excerpt',
                'custom-fields',
            ),
            'show_in_rest' => true,
            'menu_icon' => 'dashicons-images-alt2',
            'menu_position'  => 7,
            'can_export' => true,
            'taxonomies' => array(
                'post_tag',
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'Portfolio',
            'graphql_plural_name' => 'Projects',
            'template' => [
                ['core/paragraph', ['placeholder' => __('Project description goes here...', 'portfolio')]],
                ['blackalsatian/project-meta', ['placeholder' => __('Project meta options...', 'portfolio')]]
            ],
        )
    );

    // "testimonial" custom post type
    register_post_type(
        'testimonial',
        array(
            'labels' => array(
                'name' => __('Testimonials', 'testimonial'),
                'singular_name' => __('Testimonial', 'testimonial'),
                'add_new' => __('Add New', 'testimonial'),
                'add_new_item' => __('Add New Testimonial', 'testimonial'),
                'edit' => __('Edit', 'testimonial'),
                'edit_item' => __('Edit Testimonial', 'testimonial'),
                'new_item' => __('New Testimonial', 'testimonial'),
                'view' => __('View Testimonials', 'testimonial'),
                'view_item' => __('View Testimonial', 'testimonial'),
                'search_items' => __('Search Testimonials', 'testimonial'),
                'not_found' => __('No Testimonials found', 'testimonial'),
                'not_found_in_trash' => __('No Testimonials found in Trash', 'testimonial'),
            ),
            'public' => true,
            'hierarchical' => true,
            'rewrite'        => array(
                'slug' => 'testimonials',
            ),
            'has_archive' => true,
            'supports' => array(
                'title',
                'editor',
                'custom-fields'
            ),
            'show_in_rest' => true,
            'menu_icon' => 'dashicons-welcome-write-blog',
            'menu_position'  => 8,
            'can_export' => true,
            'taxonomies' => array(
                'post_tag',
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'Testimonial',
            'graphql_plural_name' => 'Testimonials',
            'template' => [
                ['core/paragraph', ['placeholder' => __('Testimonial goes here...', 'testimonial')]],
                ['blackalsatian/testimonial-meta', ['placeholder' => __('Additional testimonial fields...', 'testimonial')]]
            ],
        )
    );

    // "landing pages" custom post type
    register_post_type(
        'lander',
        array(
            'label'               => __('landers', 'lander'),
            'description'         => __('Landing Pages', 'lander'),
            'labels' => array(
                'name'                => __('Landers', 'lander'),
                'singular_name'       => __('Lander', 'lander'),
                'menu_name'           => __('Landers', 'lander'),
                'parent_item_colon'   => __('Parent Lander', 'lander'),
                'all_items'           => __('All Landers', 'lander'),
                'view_item'           => __('View Lander', 'lander'),
                'add_new_item'        => __('Add New Lander', 'lander'),
                'add_new'             => __('Add New', 'lander'),
                'edit_item'           => __('Edit Lander', 'lander'),
                'update_item'         => __('Update Lander', 'lander'),
                'search_items'        => __('Search Lander', 'lander'),
                'not_found'           => __('Not Found', 'lander'),
                'not_found_in_trash'  => __('Not found in Trash', 'lander'),
            ),
            'supports'       => array(
                'title',
                'editor',
                'excerpt',
                'thumbnail',
                'revisions',
                'custom-fields',
             ),
            'hierarchical'   => true,
            'menu_icon' => 'dashicons-airplane',
            'can_export' => true,
            'taxonomies' => array(
                'post_tag',
            ),
            'public'         => true,
            'show_ui'        => true,
            'show_in_menu'   => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'menu_position'  => 9,
            'has_archive'    => true,
            'rewrite'        => array(
                'slug' => 'x',
                'with_front' => true,
            ),
            'show_in_rest'   => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'Lander',
            'graphql_plural_name' => 'Landers',
        )
    );
}
add_action('init', 'blackals_setup_post_type');

function blackals_register_meta()
{
    register_post_meta('portfolio', 'projectUrl', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));
    register_post_meta('portfolio', 'projectYear', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('portfolio', 'projectFeatured', array(
        'show_in_rest' => true,
        'type'         => 'boolean',
        'single'       => true,
    ));

    register_post_meta('testimonial', 'testimonialAuthor', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('testimonial', 'testimonialRole', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('testimonial', 'testimonialCompany', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('page', 'pagesubheading', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('page', 'pagesubtitle', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('page', 'pageintro', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));

    register_post_meta('page', 'pageStyle', array(
        'show_in_rest' => true,
        'type'         => 'string',
        'single'       => true,
    ));
}

add_action('init', 'blackals_register_meta');

//Register GraphQl meta fields
add_action('graphql_register_types', function () {
    register_graphql_field('Portfolio', 'projectUrl', [
               'type' => 'String',
               'description' => __('The URL for the project', 'wp-graphql'),
               'resolve' => function ($post) {
                   $projectUrl = get_post_meta($post->ID, 'projectUrl', true);
                   return ! empty($projectUrl) ? $projectUrl : '';
               }
            ]);

    register_graphql_field('Portfolio', 'projectYear', [
                'type' => 'String',
                'description' => __('The year the project was developed', 'wp-graphql'),
                'resolve' => function ($post) {
                    $projectYear = get_post_meta($post->ID, 'projectYear', true);
                    return ! empty($projectYear) ? $projectYear : '';
                }
             ]);

    register_graphql_field('Portfolio', 'projectFeatured', [
                'type' => 'String',
                'description' => __('Should the project feature?', 'wp-graphql'),
                'resolve' => function ($post) {
                    $projectFeatured = get_post_meta($post->ID, 'projectFeatured', true);
                    return ! empty($projectFeatured) ? $projectFeatured : '';
                }
             ]);

    register_graphql_field('Testimonial', 'testimonialAuthor', [
                      'type' => 'String',
                      'description' => __('The testimonial_author of the post', 'wp-graphql'),
                      'resolve' => function ($post) {
                          $testimonial_author = get_post_meta($post->ID, 'testimonialAuthor', true);
                          return ! empty($testimonial_author) ? $testimonial_author : '';
                      }
                  ]);

    register_graphql_field('Testimonial', 'testimonialRole', [
                      'type' => 'String',
                      'description' => __('The testimonial_role of the post', 'wp-graphql'),
                      'resolve' => function ($post) {
                          $testimonial_role = get_post_meta($post->ID, 'testimonialRole', true);
                          return ! empty($testimonial_role) ? $testimonial_role : '';
                      }
                  ]);

    register_graphql_field('Testimonial', 'testimonialCompany', [
                      'type' => 'String',
                      'description' => __('The testimonial_company of the post', 'wp-graphql'),
                      'resolve' => function ($post) {
                          $testimonial_company = get_post_meta($post->ID, 'testimonialCompany', true);
                          return ! empty($testimonial_company) ? $testimonial_company : '';
                      }
                  ]);

    register_graphql_field('Page', 'pagesubheading', [
                    'type' => 'String',
                    'description' => __('The page_subheading of the post', 'wp-graphql'),
                    'resolve' => function ($post) {
                        $page_subheading = get_post_meta($post->ID, 'pagesubheading', true);
                        return ! empty($page_subheading) ? $page_subheading : '';
                    }
                ]);

    register_graphql_field('Page', 'pagesubtitle', [
                    'type' => 'String',
                    'description' => __('The page_subtitle of the post', 'wp-graphql'),
                    'resolve' => function ($post) {
                        $page_subtitle = get_post_meta($post->ID, 'pagesubtitle', true);
                        return ! empty($page_subtitle) ? $page_subtitle : '';
                    }
                ]);

    register_graphql_field('Page', 'pageintro', [
                    'type' => 'String',
                    'description' => __('The page_intro of the post', 'wp-graphql'),
                    'resolve' => function ($post) {
                        $page_intro = get_post_meta($post->ID, 'pageintro', true);
                        return ! empty($page_intro) ? $page_intro : '';
                    }
                ]);

    register_graphql_field('Page', 'pageStyle', [
                    'type' => 'String',
                    'description' => __('The page_style of the post', 'wp-graphql'),
                    'resolve' => function ($post) {
                        $page_style = get_post_meta($post->ID, 'pageStyle', true);
                        return ! empty($page_style) ? $page_style : '';
                    }
                ]);
});
