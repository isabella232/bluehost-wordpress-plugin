<?php
/**
 * 
 */
class Bluehost_Plugin_Compatibility_Scan {
    /**
     * Configuration Defaults
     */
    public $defaults = array(
        'plugin'                    => 'bluehost-wordpress-plugin',
        'incompatible_plugins'      => array(
            'mojo-marketplace-wp-plugin'
        ),
        'min_wp'                    => '5.2',
        'min_php'                   => '5.6',
        'php_extensions'            => array(),
        'multisite'                 => false,
    );
    /**
     * 
     */
    public $data = array(
        'plugins'           => array(),
        'php_version'       => '',
        'wp_version'        => '',
        'multisite'         => '',
        'php-ext-missing'   => array(),
    );
    /**
     * Active Config 
     */
    public $config = array();
    /**
     * 
     */
    public $test_statuses = array(
        'standard',
        'unsupported-php',
        'unsupported-wp',
        'unsupported-multisite',
        'php-ext-missing',
    );
    /**
     * 
     */
    public $result = '';
    /**
     * new \Bluehost_Plugin_Compatibility_Scan();
     * 
     */
    public function __construct( $type = 'startup', $config = array() )
    {
        // Setup Scan Configuration
        $this->setup( $config );
        // Fetch Relevant Data
        $this->fetch();
        // Evaluate Using Configuration & Data
        $this->evaluate();

        return array(
            'status'    => $this->status,
            'data'      => $this->data,
        );
    }

    protected function setup( $config ) {
        $this->config = array_merge( $this->defaults, $config );
    }

    /**
     * 
     */
    protected function fetch() {
        global $wp_version;

        $this->data = array_merge( $this->data, array(
            'php_version'       => phpversion(),
            'wp_version'        => $wp_version,
        ) );
        
        $previous = Bluehost_Plugin_Compatibility_Status::get();
        if ( ! empty( $previous ) && is_array( $previous ) ) {
            $this->data['previous_result'] = $previous;
        }
    }

    protected function evaluate() {

        $this->result = 'scan-initiated';

        if ( version_compare( $this->data['wp_version'], $this->config['min_wp'], '<' ) ) {
            $this->result = 'unsupported-wp';
        }

        if ( version_compare( $this->data['php_version'], $this->config['min_php'], '<' ) ) {
            $this->result = 'unsupported-php';
        }

        if ( \is_multisite() ) {
            $this->result = 'unsupported-multisite';
        }

        if ( ! empty( $this->config['php_extentions'] ) ) {
            foreach( $this->config['php_extensions'] as $extension ) {
                if ( ! extension_loaded( $extension ) ) {
                    $this->result = 'php-ext-missing';
                }
            }
        }
        
        if ( ! empty( $this->config['incompatible_plugins'] ) ) {
            foreach( $this->config['incompatible_plugins'] as $plugin_slug ) {
                include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
 
                // check for plugin using plugin name
                if ( is_plugin_active( trailingslashit( $plugin_slug ) . $plugin_slug . '.php' ) ) {
                    $this->result = 'plugin-compat-clash-' . $plugin_slug;
                } elseif ( is_dir( trailingslashit( WP_CONTENT_DIR ) . '/plugins/' . $plugin_slug ) ) {
                    $this->result = 'plugin-compat-clash-' . $plugin_slug;
                }
            }
        }

        if ( 'scan-initiated' === $this->result ) {
            $this->result = 'standard';
        }

    }

}
